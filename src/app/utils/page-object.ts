import { ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export abstract class PageObject<ComponentType> {
  constructor(protected fixture: ComponentFixture<ComponentType>) {}

  public detectChanges(): void {
    this.fixture.detectChanges();
  }

  protected getElementByName(name: string): DebugElement {
    const selector = `[name="${name}"]`;
    const debugElement = this.fixture.debugElement.query(By.css(selector));
    if (!debugElement) throw Error(`element with name "${name}" not found`);
    return debugElement;
  }

  protected getElementByNameAndDoNotAssert(name: string): DebugElement {
    const selector = `[name="${name}"]`;
    return this.fixture.debugElement.query(By.css(selector));
  }

  protected getElementByTag(tag: string): DebugElement {
    const debugElement = this.fixture.debugElement.query(By.css(tag));
    if (!debugElement) throw Error;
    return debugElement;
  }

  protected clickElementByName(name: string): void {
    const el: HTMLElement = this.getElementByName(name).nativeElement;
    el.click();
  }
}
