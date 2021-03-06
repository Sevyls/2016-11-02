import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BASE_URL} from "./app.tokens";
import {SharedModule} from "./shared/shared.module";
import {AppRouterModule} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {FlightBookingModule} from "./flight-booking/flight-booking.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        AppRouterModule,
        FlightBookingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [
        { provide: BASE_URL, useValue: "http://www.angular.at"}
    ],
    bootstrap: [
        AppComponent

    ]
})
export class AppModule {
}