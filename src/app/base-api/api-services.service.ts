import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  projectMgtUrl = environment.projectMgtUrl;

  constructor(private http: HttpClient) {}

  getListOfProjects() {
    return this.http.get<any>(
      this.projectMgtUrl + '/projectDetails/viewProjectDetails'
    );
  }

  getDailyTimesheetByProjectId(projectId: string) {
    return this.http.get<any>(
      this.projectMgtUrl +
        '/dailyTimesheet/viewDailyTimesheetsByProjectId/' +
        projectId
    );
  }

  getWeeklyTimesheetByProjectId(projectId: string) {
    return this.http.get<any>(
      this.projectMgtUrl +
        '/weeklyTimesheet/getWeeklyTimesheetByProjectId/' +
        projectId
    );
  }
  getProjectDetails(projectId: string) {
    return this.http.get<any>(
      this.projectMgtUrl + '/projectDetails/viewProjectDetailsById/' + projectId
    );
  }

  updateProjectDetails(data: any) {
    return this.http.put(
      this.projectMgtUrl + '/projectDetails/updateProjectDetails',
      data
    );
  }

  createDailyTimesheet(dts: any) {
    return this.http.post(
      this.projectMgtUrl + '/dailyTimesheet/createDailyTimeSheet',
      dts
    );
  }
  createExternalTimesheet(
    weeklyTimesheet: any,
    projectId: any,
    projectName: any
  ) {
    console.log(
      'createexternalTimesheet' +
        ' ' +
        weeklyTimesheet.uploadfile +
        ' ' +
        projectId +
        ' ' +
        projectName +
        ' ' +
        weeklyTimesheet.endDate +
        ' ' +
        weeklyTimesheet.startDate
    );
    return this.http.post(
      this.projectMgtUrl +
        `/projectDetails/uploadPdfDocument?endDate=${weeklyTimesheet.endDate}&startDate=${weeklyTimesheet.startDate}&projectId=${projectId}&projectName=${projectName}`,
      weeklyTimesheet.uploadfile,
      {
        headers: { 'Content-Type': 'application/octet-stream' },
      }
    );
  }

  createWeeklyTimesheetbyDate(weeklyData: any) {
    return this.http.post(
      this.projectMgtUrl +
        `/weeklyTimesheet/createTimesheet?endDate=${weeklyData.endDate}&projectId=${weeklyData.projectId}&projectName=${weeklyData.projectName}&startDate=${weeklyData.startDate}`,
      null
    );
  }

  getInvoiceDetails(){
    return this.http.get<any>(
      this.projectMgtUrl + '/projectDetails/viewProjectDetails'
    );
  }
}
