import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AssigmentComponent } from './assigment/assigment.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgCheckboxComponent } from './ng-checkbox/ng-checkbox.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustomdirDirective } from './customdir.directive';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { SimpleformoneComponent } from './simpleformone/simpleformone.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TasktempletFromComponent } from './tasktemplet-from/tasktemplet-from.component';
// import { Comp1Component } from './comp1/comp1.component';
// import { Comp2Component } from './comp2/comp2.component';
import {HttpClientModule} from '@angular/common/http';
// import { UserComponent } from './Services/user/user.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilterPipe } from './filter.pipe';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DatabindingComponent,
    ChildComponent,
    AssigmentComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgCheckboxComponent,
    AttributeDirectiveComponent,
    CustomdirDirective,
    SimpleformComponent,
    FormAssignmentComponent,
    SimpleformoneComponent,
    ReactiveformComponent,
    TasktempletFromComponent,
    // Comp1Component,
    // Comp2Component,
    // UserComponent,
    PipedemoComponent,
    CountPipe,
    FilterPipe,
    FilterpipeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
