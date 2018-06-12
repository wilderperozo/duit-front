import { TestBed, async, inject } from '@angular/core/testing';

import { LoginValidGuard } from './login-valid.guard';

describe('LoginValidGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginValidGuard]
    });
  });

  it('should ...', inject([LoginValidGuard], (guard: LoginValidGuard) => {
    expect(guard).toBeTruthy();
  }));
});
