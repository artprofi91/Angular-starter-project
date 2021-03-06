import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test-component.component';

describe('TestComponentComponent', () => {
	let component: TestComponent;
	let fixture: ComponentFixture<TestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	test('should create', () => {
		expect(component).toBeTruthy();
	});
});
