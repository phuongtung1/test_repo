import { Component, Input } from '@angular/core';

@Component({
  selector: 'json-viewer',
  template: `<h3>JSON Viewer</h3>
             <div>{{ node?.outputs[0]?.value || "no-value" }}</div>`,
  styles: []
})
export class JSONViewerComponent{
    @Input() node; 

    constructor(){ console.log(`JSON Viewer Created`); }
}