import { TestBed, inject } from '@angular/core/testing';

import { UserPostsService } from './user-posts.service';

describe('UserPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPostsService]
    });
  });

  it('should be created', inject([UserPostsService], (service: UserPostsService) => {
    expect(service).toBeTruthy();
  }));
});
