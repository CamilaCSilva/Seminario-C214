import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let imc: number;
  let resposta: string;

  const imcAPMock = {
    altura: 1.72,
    peso: 70
  }

  const imcOCIIMock = {
    altura: 1.53,
    peso: 90
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('entradaDados', () => {
    it('should calculate the IMC', () => {
      imc = app.entradaDados(imcAPMock.altura, imcAPMock.peso);
      expect(imc).toEqual(23.66);
    });

    it('should return text Peso Normal!', () => {
      app.entradaDados(imcAPMock.altura, imcAPMock.peso);
      resposta = app.resposta;
      expect(resposta).toEqual('Peso normal!');
    });

    it('should not return text Obesidade I!', () => {
      app.entradaDados(imcOCIIMock.altura, imcOCIIMock.peso);
      resposta = app.resposta;
      expect(resposta).not.toEqual('Obesidade I!');
    })
  });
});
