# report_freeze_pane
Adds "Freeze until this column" and "Unfreeze" options to all report columns

# 🧊 Report Freeze Pane

A custom Frappe app that enables users to freeze report columns dynamically using a dropdown option, similar to Excel’s “Freeze Panes” feature.

---

## 🚀 Features

- Adds a dropdown option for each column in ERPNext/Frappe Query and Script Reports.
- Options available:
  - **🧊 Freeze until "Column"**: Freezes all columns up to and including the selected one.
  - **🔓 Unfreeze**: Unfreezes all columns.
- Integrated with Frappe's built-in DataTable column menu.
- Works globally across all reports without modifying each one individually.

---

## 📦 Installation

### 1. Install via GitHub (Frappe Cloud or Bench)

#### Frappe Cloud:

- Go to your site > **Apps** > **Install from GitHub**
- Enter the repo URL:



#### Development Bench:

```bash
cd ~/frappe-bench/apps
git clone https://github.com/your-username/report_freeze_pane.git
bench --site your-site-name install-app report_freeze_pane

