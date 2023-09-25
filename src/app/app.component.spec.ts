import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    const formBuilderMock = {
      group: jasmine.createSpy('group').and.returnValue({username:'',password:''}),
    };
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilderMock },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
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
      "username": "isha",
      "password": "test"
    });
    expect(component.loginForm.valid).toEqual(true);
  });
});
