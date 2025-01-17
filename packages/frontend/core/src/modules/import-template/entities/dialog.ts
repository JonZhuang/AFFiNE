import { Entity, LiveData } from '@toeverything/infra';

interface TemplateOptions {
  templateName: string;
  snapshotUrl: string;
}

export class ImportTemplateDialog extends Entity {
  readonly isOpen$ = new LiveData(false);
  readonly template$ = new LiveData<TemplateOptions | null>(null);

  open(options: TemplateOptions) {
    this.template$.next(options);
    this.isOpen$.next(true);
  }

  close() {
    this.isOpen$.next(false);
  }
}
