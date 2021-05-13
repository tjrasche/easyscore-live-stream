import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as GamesFeature from './games.reducer';
import * as GamesActions from './games.actions';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { XmlResponseHandlerService } from '../../../../../libs/xml-response-handler/src/lib/xml-response-handler.service';

@Injectable()
export class GamesEffects {
  addGame$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GamesActions.addGame),
      switchMap((action) =>
        this.http
          .get(
            `${environment.apiHost}/webservices/Games.asmx/GameInfo?GameID=${action.id}`,
            { responseType: 'text' }
          )
          .pipe(
            this.xmlResponseHandler.handleGamesResponse(action.id),
            map((game) => GamesActions.addGameSuccess({ game })),
            catchError((err) => {
              console.log(err);
              return of(GamesActions.addGamesFailure());
            })
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private xmlResponseHandler: XmlResponseHandlerService
  ) {}
}
