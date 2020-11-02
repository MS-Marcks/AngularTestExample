import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityService } from './../../services/security/security.service';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { InterceptorService } from 'src/app/services/Interceptor/interceptor.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // tslint:disable-next-line: deprecation
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('click should invoke  on Login', fakeAsync(
    () => {
    spyOn(component,'onSubmit');
    const btn = fixture.debugElement.nativeElement.querySelector('button');
    btn.click();
    tick();
    expect(component.onSubmit).toHaveBeenCalled();
  }
  ));

  it('click on login', () => {
    component.LoginFrom.setValue({ nombre: 'hola', password: 'hola' });
    component.onSubmit();
    expect(component.men).toEqual('ACCESS LOGIN');
  });

});
