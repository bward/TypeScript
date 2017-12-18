import {Caesar} from "./simple-cipher"

describe("Caesar", () => {
    let caesar: Caesar

    beforeAll(() => {
        caesar = new Caesar()
    })

    it("can encode", () => {
        const plainText = "iamapandabear"
        expect(caesar.encode(plainText)).toEqual("ldpdsdqgdehdu")
    })
    
    it("can decode", () => {
        const plainText = "ldpdsdqgdehdu"
        expect(caesar.decode(plainText)).toEqual("iamapandabear")
    })
})