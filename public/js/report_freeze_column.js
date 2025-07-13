frappe.after_ajax(() => {
  const Report = frappe.ui.Report;

  const originalSetupDatatable = Report.prototype.setup_datatable;

  Report.prototype.setup_datatable = function () {
    originalSetupDatatable.call(this);

    const datatable = this.datatable;
    if (!datatable) return;

    datatable.options.columnMenu = (column) => {
      const defaultMenu = datatable.getDefaultColumnMenu(column);
      return [
        ...defaultMenu,
        {
          label: `🧊 Freeze until "${column.label}"`,
          action: () => {
            const colIndex = datatable.datamanager.getColumnIndex(column.id);
            datatable.datamanager.freeze_column = colIndex + 1;
            datatable.refresh();
          }
        },
        {
          label: `🔓 Unfreeze`,
          action: () => {
            datatable.datamanager.freeze_column = 0;
            datatable.refresh();
          }
        }
      ];
    };

    datatable.refresh();
  };
});
