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