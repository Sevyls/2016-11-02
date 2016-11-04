import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CityPipe} from "./pipes/city.pipe";
import {CityValidatorDirective} from "./validation/city.validator";
import {RoundTrip} from "./validation/roundtrip.validator";
import {AsyncCityValidatorDirective} from "./validation/async-city.validator";
import {DateComponent} from "./date/date.component";

@NgModule({
    imports: [
        FormsModule, // [(ngModel)]
        CommonModule // ngFor, ngIf, ngStyle, ngClass, date, json
    ],
    providers: [
        // Keine
    ],
    declarations: [
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTrip,
        DateComponent
    ],
    exports:[
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTrip,
        DateComponent
    ]
})
export class SharedModule {

}