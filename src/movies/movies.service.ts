import { Injectable } from '@nestjs/common';
import { movies } from 'src/mocks/movies';

@Injectable()
export class MoviesService {
  getMovies() {
    return movies.value;
  }

  getMovieById(id: string) {
    const foundMovie = movies.value.filter((movie) => movie.id === id);
    return foundMovie;
  }

  postMovie(body) {
    movies.value.push(body);
    return body;
  }

  deleteMovie(id: string) {
    let movieBody = {};

    movies.value.map((movie, index) => {
      if (movie.id === id) {
        movieBody = { ...movie };
        movies.value.splice(index, 1);
      }
    });

    return movieBody;
  }

  updateMovie(id: string, body) {
    let movieBody = {};

    movies.value.map((movie, index) => {
      if (movie.id === id) {
        const updatedMovie = Object.assign(movies.value[index], body);
        movies.value.splice(index, 1, updatedMovie);
        movieBody = { ...updatedMovie };
      }
    });

    return movieBody;
  }
}
