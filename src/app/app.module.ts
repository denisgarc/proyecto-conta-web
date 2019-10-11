import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Services
import { ServiceModule } from './services/service.module';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

import { FormsModule } from '@angular/forms';
import { SessionMapper } from 'src/app/mappers/general/session.mapper';
import { ErrorMapper } from './mappers/general/error.mapper';
import { RouterAuthGuard } from './providers/guards/router.guard';

// import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SessionMapper,
    ErrorMapper,
    RouterAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
