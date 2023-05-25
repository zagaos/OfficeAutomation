import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  projectMgtUrl = environment.projectMgtUrl;
  employeeURL = environment.employeeUrl;

  constructor(private http: HttpClient) {}

  createProjectDetails(projectDetails: any) {
    return this.http.post(
      this.projectMgtUrl + '/projectDetails/createProjectDetails',
      projectDetails
    );
  }

  getListOfProjects() {
    return this.http.get<any>(
      this.projectMgtUrl + '/projectDetails/viewProjectDetails'
    );
  }

  getListOfPO(projectId: string) {
    return this.http.get<any>(
      this.projectMgtUrl + '/po/getPOByProjectId/'+ projectId
    );
  }

  deleteProjectById(projectId: any) {
    return this.http.delete<any>(
      this.projectMgtUrl + '/projectDetails/deleteProjectDetails/' + projectId
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
    projectName: any,
    docType: any
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
        `/projectDetails/uploadPdfDocument?documentType=${docType}&endDate=${weeklyTimesheet.endDate}&startDate=${weeklyTimesheet.startDate}&projectId=${projectId}&projectName=${projectName}`,
      weeklyTimesheet.uploadfile,
      {
        headers: { 'Content-Type': 'application/octet-stream' },
      }
    );
  }

  createWeeklyTimesheetbyDate(weeklyData: any) {
    return this.http.post(
      this.projectMgtUrl +
        `/weeklyTimesheet/createTimesheet?documentType=${weeklyData.documentType}&endDate=${weeklyData.endDate}&projectId=${weeklyData.projectId}&projectName=${weeklyData.projectName}&startDate=${weeklyData.startDate}`,
      null
    );
  }

  getInvoiceDetails() {
    return this.http.get<any>(
      this.projectMgtUrl + '/projectDetails/viewProjectDetails'
    );
  }

  getweeklyTimesheetfile(document: any): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'text/plain');
    console.log('checking the input', document);
    return this.http.get(
      this.projectMgtUrl +
        `/projectDetails/document/${document.documentId}` +
        `?documentType=${document.documentType}`,
      { headers, responseType: 'blob' }
    );
  }
  getExternalTimesheetData(projectId: any, docType: any) {
    return this.http.get<any>(
      this.projectMgtUrl +
        `/projectDetails/document/listbyType/${projectId}` +
        `?documentType=${docType}`
    );
  }

  getWeeklyTimesheetDataByWeekId(weeklyTimesheetId: any) {
    return this.http.get<any>(
      this.projectMgtUrl +
        `/weeklyTimesheet/getWeeklyTimesheetByWeeklyTimesheetId/${weeklyTimesheetId}`
    );
  }

  updateWeeklyTimesheetData(weeklyTimesheetData: any) {
    return this.http.put<any>(
      this.projectMgtUrl + '/weeklyTimesheet/updateWeeklyTimesheet',
      weeklyTimesheetData
    );
  }

  deletedailyTimesheetById(dailyTimesheetId: any) {
    return this.http.delete<any>(
      this.projectMgtUrl +
        `/dailyTimesheet/deleteDailyTimeSheet/${dailyTimesheetId}`
    );
  }

  deleteWeeklyTimesheet(weeklyTimesheetId: any) {
    console.log('deleteWeeklyTimesheet', weeklyTimesheetId);
    return this.http.delete<any>(
      this.projectMgtUrl +
        `/weeklyTimesheet/deleteWeeklyTimesheet/${weeklyTimesheetId}`
    );
  }

  getMeetingList(projectId: any) {
    return this.http.get<any>(
      this.projectMgtUrl +
        `/meetingMinutes/getMeetingMinutesByProjectId/${projectId}`
    );
  }

  createMeetingMinutes(customValue: any) {
    return this.http.post(
      this.projectMgtUrl + '/meetingMinutes/createMeetingMinutes',
      customValue
    );
  }

  getMeetingMinutes(meetingMinutesId: any) {
    return this.http.get<any>(
      this.projectMgtUrl +
        `/meetingMinutes/getMeetingMinutesByMeetingMinutesId/${meetingMinutesId}`
    );
  }

  deleteMeetingMinutesById(meetingMinutesId: any) {
    return this.http.delete<any>(
      this.projectMgtUrl +
        `/meetingMinutes/deleteMeetingMinutesById/${meetingMinutesId}`
    );
  }

  getInactiveEmployeeList() {
    return this.http.get<any>(
      this.employeeURL + 'getListOfInactiveEmployeeInfo'
    );
  }

  getDropDown() {
    return this.http.get<any>(
      this.projectMgtUrl + '/dropdown/countryDropDowns'
    );
  }

  assignProjectToEmployee(projectId: any, employeeData: any) {
    return this.http.post<any>(
      this.projectMgtUrl +
        `/projectDetails/projectAssignment/${projectId}?employeeEmail=${employeeData.employeeEmail}&employeeId=${employeeData.employeeId}&employeeName=${employeeData.employeeName}&employeeRole=${employeeData.employeeRole}`,
      null
    );
  }

  createQuotes(quote: any) {
    return this.http.post(
      this.projectMgtUrl + '/Quotes/createQuotes',
      quote
    );
  }

  viewAllPO(projectId: any) {
    return this.http.get<any>(
      this.projectMgtUrl +
        `/po/viewAllPO/${projectId}` 
    );
  }

  uploadPO(
    po: any,
    projectId: any,
    projectName: any,
  ) {
    console.log(
      'uploadPO' +
        ' ' +
        projectId +
        ' ' +
        projectName +
        ' ' +
        po.endDate +
        ' ' +
        po.startDate
    );
    return this.http.post(
      this.projectMgtUrl +
        `/po/uploadPO?endDate=${po.endDate}&startDate=${po.startDate}&projectId=${projectId}&projectName=${projectName}`,
      po.uploadfile,
      {
        headers: { 'Content-Type': 'application/octet-stream' },
      }
    );
  }

  viewPO(poId: any): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'text/plain');
    return this.http.get(
      this.projectMgtUrl +
        `/po/viewPO/${poId}`,
        { headers, responseType: 'blob' }
    );
  }

  deletePO(poId: any) {
    console.log('PO', poId);
    return this.http.delete<any>(
      this.projectMgtUrl +
        `/po/deletePOByPoId/${poId}`
    );
  }


}
