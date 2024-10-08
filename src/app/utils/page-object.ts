import { ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export abstract class PageObject<ComponentType> {
  constructor(private fixture: ComponentFixture<ComponentType>) {}

  detectChanges(): void {
    this.fixture.detectChanges();
  }

  getElement(testId: string): DebugElement {
    const selector = `[test-id="${testId}"]`;
    return this.fixture.debugElement.query(By.css(selector));
  }

  getElementByTag(tag: string): HTMLElement | null {
    const htmlElement: HTMLElement = this.fixture.nativeElement;
    return htmlElement.querySelector(tag);
  }

  // getElement(testId: string): DebugElement {
  //   const selector = `[test-id="${testId}"]`;
  //   return this.fixture.debugElement.query(By.css(selector));
  // }
}
