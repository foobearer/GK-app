import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hierarchy } from './hierarchy';

@Injectable({
  providedIn: 'root'
})
export class HierarchyService {

  public readonly baseUrl = `https://test.greenkoncepts.com/gktest/`;

  constructor(
    private http: HttpClient
  ) { }

  getNodeHierarchy(key: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}node-hierarchy?token=${key}`).pipe(
      map(
        data => {
          const hierarchy = {
            nodeName: data.entity.nodeStandardMetadata.nodeName,
            children: data.entity.nodeStandardMetadata.children
          }
          return hierarchy;
        }
      )
    )
    
  }

  _dataChange = new BehaviorSubject<Hierarchy[]>(
    [{
      nodeName: 'John Heart 1',
      children: [
        {
          nodeName: 'Ken Bond 1',
          children: []
        },
        {
          
          nodeName: 'Ken Bond 2',
          children: [
            {
              nodeName: 'Vaggelis Awesome 1',
              children: []
            }
          ]
        }
      ]
    },
    {
      nodeName: 'John Heart 2',
      children: [
        {
          nodeName: 'Ken Bond 1',
          children: []
        }
      ]
    }
  ]);

}
