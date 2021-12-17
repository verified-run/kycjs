import { VerificationList, ValidatorConstructor } from "../actions/Verification";

export abstract class Environment {
    protected actions: VerificationList

    public getVerificationList(): VerificationList {
        return this.actions;
    };
    public getVerification(name: string): ValidatorConstructor {
        return this.actions[name];
    };
}