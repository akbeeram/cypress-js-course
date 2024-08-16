import { Component } from '@angular/core';
import { companyData, companyResultsData } from '../companyData';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.less']
})
export class CompanyDetailsComponent {

  public companyData = companyData;
  public companyResultsData = companyResultsData;

  public profitTableAccordionData = {
    parents: [{
      rowName: 'Sales',
      children: [1],
      isOpen: false
    }, {
      rowName: 'Expenses',
      children: [3, 4],
      isOpen: false
    }, {
      rowName: 'Other Income',
      children: [8, 9, 10, 11],
      isOpen: false
    }, {
      rowName: 'Net Profit',
      children: [15, 16, 17, 18, 19, 20, 21],
      isOpen: false
    }],
    rowKeys: ['Sales', 'Expenses', 'Other Income', 'Net Profit'],
    allChildren: [1, 3, 4, 8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 21]
  };

  returnZero() {
    return 0
  }
  public getExpandText(key: any) {
    var obj = this.profitTableAccordionData.parents.find((x) => x.rowName == key);
    return obj ? obj?.isOpen ? '-' : '+' : '';
  }
  public handleOpenClick(value: any) {
    var m = this.profitTableAccordionData.parents.find(x => x.rowName == value);
    if (m) {
      m.isOpen = !m?.isOpen;
    }
  }
  public isRowOpen(i: number) {
    var item = this.profitTableAccordionData.parents.find((x) => x?.children?.includes(i));
    return item?.isOpen;
  };
  public isFirstHiddenRow(i: number) {
    return !!this.profitTableAccordionData.parents.find((x) => x?.children?.[0] == i);
  }
  public isLastHiddenRow(i: number) {
    return !!this.profitTableAccordionData.parents.find((x) => x?.children?.[x.children.length - 1] == i);
  }
}
