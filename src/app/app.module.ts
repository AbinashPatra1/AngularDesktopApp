import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgSelectModule } from '@ng-select/ng-select';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { NewTestComponent } from './new-test/new-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TestDetailsComponent,
    NewTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    AppRoutingModule,
    NgbModule,
    NgxEchartsModule.forRoot({          //Using dynamic import to fix an Issue
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
