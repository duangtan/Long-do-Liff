// import { TestBed } from '@angular/core/testing';

// import { ServiceService } from './service.service';

// describe('ServiceService', () => {
//   let service: ServiceService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(ServiceService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiceService } from './service.service';
import { FoodDetail } from './detail-food/detail-food.component';
import { CocktailDetail } from './detail-cocktail/detail-cocktail.component';

describe('ServiceService', () => {
  let service: ServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceService]
    });
    service = TestBed.inject(ServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mock food data', inject([HttpTestingController, ServiceService],
    (httpMock: HttpTestingController, service: ServiceService) => {
      const mockFoodData: FoodDetail = {
        title: '',
        difficulty: '',
        image: undefined,
        id: '',
        portion: '',
        time: '',
        description: '',
        ingredients: '',
        method: ''
      };

      service.getFoodById('1').subscribe((data: FoodDetail) => {
        expect(data).toEqual(mockFoodData);
      });

      const req = httpMock.expectOne(`${service.getApiFood()}1`);
      expect(req.request.method).toBe('GET');
      req.flush(mockFoodData);
    })
  );

  it('should return mock cocktail data', inject([HttpTestingController, ServiceService],
    (httpMock: HttpTestingController, service: ServiceService) => {
      const mockCocktailData: CocktailDetail = {
        title: '',
        difficulty: '',
        image: undefined,
        id: '',
        portion: '',
        time: '',
        description: '',
        ingredients: '',
        method: ''
      };

      service.getCocktailById('1').subscribe((data: CocktailDetail) => {
        expect(data).toEqual(mockCocktailData);
      });

      const req = httpMock.expectOne(`${service.getApiCocktail()}1`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCocktailData);
    })
  );
});
