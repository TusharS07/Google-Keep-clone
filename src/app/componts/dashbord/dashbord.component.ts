import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../../Service/DataService/data-service.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashbordComponent implements OnDestroy {

  isSelected = false;
  mobileQuery: MediaQueryList;



  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataServiceService: DataServiceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onDivClick() {
    this.isSelected = !this.isSelected;
  }

  serchNotes(event:any){
    this.dataServiceService.sendSearchValue(event.target.value);
  }
}
