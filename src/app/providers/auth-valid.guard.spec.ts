import { TestBed, async, inject } from '@angular/core/testing';

import { AuthValidGuard } from './auth-valid.guard';

describe('AuthValidGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthValidGuard]
    });
  });

  it('should ...', inject([AuthValidGuard], (guard: AuthValidGuard) => {
    expect(guard).toBeTruthy();
  }));
});
