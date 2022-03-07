import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CompactType, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';

@Component({
    selector: 'app-compact',
    templateUrl: './compact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class CompactComponent implements OnInit {
    options: GridsterConfig;

    dashboard: Array<GridsterItem>;

    ngOnInit(): void {
        this.options = {
            gridType: GridType.Fit,
            compactType: CompactType.None,
            maxCols: 10,
            maxRows: 10,
            pushItems: true,
            draggable: {
                enabled: true,
            },
            resizable: {
                enabled: true,
            },
        };

        this.dashboard = [
            { cols: 2, rows: 1, y: 0, x: 0 },
            { cols: 2, rows: 2, y: 0, x: 2 },
            { cols: 1, rows: 1, y: 0, x: 4 },
            { cols: 3, rows: 2, y: 1, x: 4 },
            { cols: 1, rows: 1, y: 4, x: 5 },
            { cols: 1, rows: 1, y: 2, x: 1 },
            { cols: 2, rows: 2, y: 5, x: 5 },
            { cols: 2, rows: 2, y: 3, x: 2 },
            { cols: 2, rows: 1, y: 2, x: 2 },
            { cols: 1, rows: 1, y: 3, x: 4 },
            { cols: 1, rows: 1, y: 0, x: 6 },
        ];
    }

    changedOptions(): void {
        if (this.options.api && this.options.api.optionsChanged) {
            this.options.api.optionsChanged();
        }
    }

    removeItem($event: MouseEvent | TouchEvent, item): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }

    addItem(): void {
        this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
    }
}
