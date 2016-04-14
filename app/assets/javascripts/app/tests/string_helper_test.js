describe("String.prototype.hashCode()", function(){
    it('will be the same', function(){
       expect(''.hashCode()).toBe(''.hashCode());
       expect(" \n\r".hashCode()).toBe(" \n\r".hashCode());
       expect("    ".hashCode()).toBe("    ".hashCode());
       expect("ab cdefghijklmnopqrstuvwxyz01234 5678 9!@# $%^&*()_+".hashCode())
           .toBe("ab cdefghijklmnopqrstuvwxyz01234 5678 9!@# $%^&*()_+".hashCode());
    });
});


describe("String.isEmpty()", function(){
    it("will be empty", function(){
        expect(String.isEmpty("")).toBeTruthy();
        expect(String.isEmpty(" ")).toBeTruthy();
        expect(String.isEmpty(" \n")).toBeTruthy();
        expect(String.isEmpty("\n\r")).toBeTruthy();
        expect(String.isEmpty(0)).toBeTruthy();
        expect(String.isEmpty(null)).toBeTruthy();
        expect(String.isEmpty(undefined)).toBeTruthy();
        expect(String.isEmpty(false)).toBeTruthy();
        expect(String.isEmpty("non empty string")).toBeFalsy();
        expect(String.isEmpty(" a")).toBeFalsy();
    });
});