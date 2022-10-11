import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

type creationBody = {
  id: string;
  title: string;
  genre: string;
  releaseYear: number;
};

type updateBody = {
  id?: string;
  title?: string;
  genre?: string;
  releaseYear?: number;
};

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('get-movies')
  getMovies() {
    return this.moviesService.getMovies();
  }

  @Get('/get-movie/:id')
  getMovieById(@Param('id') id: string) {
    return this.moviesService.getMovieById(id);
  }

  @Post('post-movie')
  postMovie(@Body() body: creationBody) {
    return this.moviesService.postMovie(body);
  }

  @Delete('delete-movie/:id')
  deleteMovie(@Param('id') id: string) {
    return this.moviesService.deleteMovie(id);
  }

  @Put('update-movie/:id')
  updateMovie(@Param('id') id: string, @Body() body: updateBody) {
    return this.moviesService.updateMovie(id, body);
  }
}
