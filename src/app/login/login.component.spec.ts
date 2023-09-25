import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockrouter = {
    navigate: jasmine.createSpy('navigate'),
  }
  beforeEach(async () => {
    const formBuilderMock = {
      group: jasmine.createSpy('group').and.returnValue('something'),
      // A spy is a function that invisibly wraps a method and lets you control what values it returns or monitor how it was called.
    };
    mockrouter = { navigate: jasmine.createSpy('navigate') };
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule.withRoutes([]),],
      declarations: [
        LoginComponent
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilderMock },
        { provide: Router, useValue: mockrouter }
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //detectChanges() tells Angular to run change-detection. 
    // The TestBed is the first and largest of the Angular testing utilities. It creates an Angular testing module — a @NgModule class — that you configure with the configureTestingModule method to produce the module environment for the class you want to test.
    // A fixture is a wrapper for a component and its template.

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'unit-testing'`, () => {
    expect(component.title).toEqual('unit-testing');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('unit-testing app is running!');
  // });


  it('component initial state', () => {
    expect(component.submitted).toBeFalsy();
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  });


  it('Check form element count', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(2);
  });

  it('should have a loginForm property initialized with default values', () => {
    expect(component.loginForm.value).toEqual({ username: '', password: '' });
  });

  it('submitted should be true when onSubmit()', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should require valid email', () => {
    component.loginForm.setValue({
      "username": "",
      "password": "test"
    });
    expect(component.loginForm.valid).toEqual(false);
  });

  it('should be valid if form value valid', () => {
    component.loginForm.setValue({
      "username": "isha24",
      "password": "230717"
    });
    expect(component.loginForm.valid).toEqual(true);
  });

  it('home navigation test', () => {
    component.loginForm.setValue({
      "username": "isha24",
      "password": "230717"
    });
    component.onSubmit();
    expect(component.submitted).toBeFalsy()
    expect(component.loginForm.valid).toBeTruthy();
    expect(mockrouter.navigate).toHaveBeenCalledWith(['/home']);
  });


  // it('should redirect the user to "login form" component when button is clicked', () => {
  //   let value = {
  //     username: 'user123',
  //     password: 'pwd';
  //   };
  //   comp.username = '';
  //   comp.password = '';
  //   spyon(comp.loginservice, 'login').and.callthrough();
  //   comp.logindata(value);
  //   expect(comp.username).tobe('user123');
  //   expect(comp.password).tobe('pwd');
  //   expect(comp.loginservice.login).tohavebeencalledwith(value)
  //   expect(routermock.navigate).tohavebeencalledwith(['/projectdata/mastersequence']);

  // });
});