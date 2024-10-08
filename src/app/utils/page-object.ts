import { ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export abstract class PageObject<ComponentType> {
  constructor(private fixture: ComponentFixture<ComponentType>) {}

  detectChanges(): void {
    this.fixture.detectChanges();
  }
  getElementByName(name: string): DebugElement {
    const selector = `[name="${name}"]`;
    const debugElement = this.fixture.debugElement.query(By.css(selector));
    if (!debugElement) throw Error;
    return debugElement;
  }
}
