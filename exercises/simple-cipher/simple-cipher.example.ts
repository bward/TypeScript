const alphabet = "abcdefghijklmnopqrstuvwxyz"

class Caesar {
    public encode(plainText: string, shift=3) {
        return plainText
            .split("")
            .map((char) => alphabet[(alphabet.indexOf(char) + shift + 26) % 26])
            .join("")
    }

    public decode(cipherText: string, shift=3) {
        return this.encode(cipherText, -shift)
    }
}

export {Caesar}