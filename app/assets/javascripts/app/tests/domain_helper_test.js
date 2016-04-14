describe("String.prototype.toDomain()", function(){
    it("will false on empty domain", function(){
        expect("".toDomain()).toBeFalsy();
    });

    it("will false on empty dots domains", function(){
        expect(".".toDomain()).toBeFalsy();
        expect("..".toDomain()).toBeFalsy();
        expect("...".toDomain()).toBeFalsy();
        expect(".a..".toDomain()).toBeFalsy();
    });

    it("will false on top level domains", function(){
        expect("com".toDomain()).toBeFalsy();
        expect("localhost".toDomain()).toBeFalsy();
        expect("topLevel".toDomain()).toBeFalsy();
    });

    it("will remove www. only for 2nd level domains", function(){
        expect("www.example.com".toDomain()).toEqual('example.com');
        expect("www.com".toDomain()).toEqual('www.com');
    });


    it('will ignore any http://, https://, ftp://', function(){
        expect("http://www.example.com".toDomain()).toEqual('example.com');
        expect("http://example.com".toDomain()).toEqual('example.com');
        expect("https://www.example.com".toDomain()).toEqual('example.com');
        expect("https://example.com".toDomain()).toEqual('example.com');
        expect("ftp://www.example.com".toDomain()).toEqual('example.com');
        expect("ftp://example.com".toDomain()).toEqual('example.com');
    });


    it('will ignore any url part', function(){
        expect("http://www.example.com/some/staff".toDomain()).toEqual('example.com');
        expect("www.example.com/some/staff".toDomain()).toEqual('example.com');
        expect("example.com/some/staff".toDomain()).toEqual('example.com');
        expect("http://example.com/some/staff".toDomain()).toEqual('example.com');
        expect("http://e.xxx.a.m.p.l.e.com/s!@#$%$%^^&&&***(()(*^ome/staff".toDomain()).toEqual('e.xxx.a.m.p.l.e.com');
    });


    it('will false on non-existing alfa domain ending', function(){
        expect("http://e.xxx.a.m.p.l.e.nonexistingalfa/s!@#$%$%^^&&&***(()(*^ome/staff".toDomain()).toBeFalsy();
        expect("www.some.zzzz".toDomain()).toBeFalsy();
    });

    it('mast contains only correct [A-z0-9.-]', function(){
        expect("www.som!e.com".toDomain()).toBeFalsy();
        expect("www.some-domain.com".toDomain()).toEqual('some-domain.com');
        expect("1some-domain.com".toDomain()).toEqual('1some-domain.com');
    });

});