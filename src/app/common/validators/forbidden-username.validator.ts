import { Directive, Input, OnInit } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[forbiddenUsername]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenUsernameValidatorDirective, multi: true }],
})
export class ForbiddenUsernameValidatorDirective implements Validator, OnInit {

    ngOnInit(): void {

    }

    validate(c: FormControl) {
        if (c.value == 'test') {
            return {
                forbiddenUsername: {
                    value: c.value
                }
            }
        }
        return null;
    }
}