import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-projectdetails',
  templateUrl: './view-projectdetails.component.html',
  styleUrls: ['./view-projectdetails.component.scss'],
})
export class ViewProjectdetailsComponent {
  @Input()
  value?: any;
  projectId?: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  editable = false;
  readonly = true;
  formData: {[key: string]: any} = {};
 
  data = [
    {
      'Client Address': '123 Main Street',
      'Client Country': 'india',
      'Client Currency': 'usd',
      'Client Email': 'user@redhat.com',
      'Client Name': 'redhat',
      'Client Timezone': 'est',
      Date: '2023-04-06',
      Duration: '2 hours',
      'Employee Email': 'anu@redhat.com',
      'Employee ID': '1',
      'Employee Name': 'anu',
      'Employee Number': 'emp1',
      'Employee Role': 'Senior consultant',
      'End Date': '2023-04-08',
      From: 'Kovilpatti',
      PA: 'abc123',
      PO: 'def132',
      'Project Assignment Status': true,
      'Project ID': '24',
      'Project Manager': 'Asha',
      'Project Name': 'DIGI',
      'Project Type': 'Active',
      Quantity: '10',
      'Quote ID': 'q1',
      'Quote Status': 'Approved',
      'Service Description': 'Pam and dmn',
      SFDC: 'sf1234',
      'Start Date': '2023-04-07',
      To: 'MAlaysia',
      'Total Amount': '1000',
      'Unit Price': '100',
      'Valid Date': '2023-04-30',
    },
  ];

  edit() {
    console.log('editable');
    this.editable = !this.editable;
    this.readonly = !this.readonly;
    this.editable = true;
  }
  
  updateFormData(key: string, value: any) {
    this.formData = {...this.formData, [key]: value};
  }
  submitForm(formData: any) {
    // create a new object with updated values
    const updatedData: {[key: string]: any} = {};
    Object.entries(this.data[0]).forEach(([key, value]) => {
      updatedData[key] = formData.hasOwnProperty(key) ? formData[key] : value;
    });
    console.log(formData);
        alert('The project details were updated sucessfully');
        console.log('The project details were updated sucessfully');
    console.log(updatedData);
   
  }
}
