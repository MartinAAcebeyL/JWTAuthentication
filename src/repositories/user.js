class UserRepository {
    constructor(User) {
        this.User = User;
    }

    async createNewDocument(name, lastName, email, password, phone, isInstitute=false) {
        return await this.User.create({ name, lastName, email, password, phone, isInstitute });
    }
}

module.exports = UserRepository;
