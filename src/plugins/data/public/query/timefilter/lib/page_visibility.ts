/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { fromEvent, Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';

export function createPageVisibility$(): Observable<DocumentVisibilityState> {
  return fromEvent(document, 'visibilitychange').pipe(
    startWith(document.visibilityState),
    map(() => document.visibilityState),
    shareReplay({ refCount: true, bufferSize: 1 })
  );
}
