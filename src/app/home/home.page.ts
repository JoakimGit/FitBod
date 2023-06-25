import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  public segmentList = ['Track', 'History', 'Graph'];
  public selectedSegment = '';

  @ViewChild('segments') segments?: IonSegment;
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.selectedSegment = this.segmentList[0];
  }

  segmentSelected(item: string, index: number) {
    console.log(item, index);
  }

  onSwipe(event: any) {
    console.log(event);
  }

  onSlideChange(event: any) {
    if (!this.swiper) return;
    const index = this.swiper.swiperRef.activeIndex;
    this.selectedSegment = this.segmentList[index];
    this.changeDetector.detectChanges();
  }
}
