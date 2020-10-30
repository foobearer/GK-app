import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { HierarchyService } from './hierarchy.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Hierarchy } from './hierarchy';
import {of as observableOf} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit { 
  nodes: Hierarchy[] = [];
  title: string = 'Hierarchy';
  nestedTreeControl: NestedTreeControl<Hierarchy>;
  nestedDataSource: MatTreeNestedDataSource<Hierarchy>;

  constructor(
    private hierarchy: HierarchyService,
    private route: Router
  ) { }

  ngOnInit() {
    this.nestedTreeControl = new NestedTreeControl<Hierarchy>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    if (localStorage.getItem('token') === null) this.route.navigate(['/login'])

    this.hierarchy.getNodeHierarchy(localStorage.getItem('token')).subscribe(
      nodes => {
        
        this.nodes.push(nodes)
        console.log(this.nodes);
        this.nestedDataSource.data = this.nodes;
      }
    )
  }

  private _getChildren = (node: Hierarchy) => observableOf(node.children);
  hasNestedChild = (_: number, nodeData: Hierarchy) => {
    if (nodeData.children) {
      return nodeData.children.length > 0
    }
  };

}
