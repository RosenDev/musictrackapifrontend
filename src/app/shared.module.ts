import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ServiceModule } from "./service/service.module";
import { ClarityModule } from "@clr/angular";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        ClarityModule,
        AppRoutingModule,
        HttpClientModule,
        ServiceModule,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        ClarityModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ServiceModule
      ]
})
export class SharedModule { }