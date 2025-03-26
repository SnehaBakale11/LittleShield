#include <iostream>
using namespace std;

class basic_info {
protected:
    string name;
    int age;
    string gender;
    string address;
    string mobile_no;
    string email;

public:
    void getBasicInfo() {
        cout << "Enter your Name: ";
        getline(cin, name);  
        
        cout << "Enter Age: ";
        cin >> age;

        cout << "Enter Gender: ";
        cin >> gender;
        cin.ignore();  
        
        cout << "Enter Address: ";
        getline(cin, address);
        
        cout << "Enter Mobile Number: ";
        cin >> mobile_no;

        cout << "Enter Email ID: ";
        cin >> email;
    }

    void displayBasicInfo() {
        cout << "\nName: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Gender: " << gender << endl;
        cout << "Address: " << address << endl;
        cout << "Mobile No: " << mobile_no << endl;
        cout << "Email ID: " << email << endl;
    }
};

class department_info {
protected:
    string department;
    double salary;
    int employee_Id;
    string designation;

public:
    void getDepartmentInfo() {
        cout << "Enter Department: ";
        cin >> department;

        cout << "Enter Salary: ";
        cin >> salary;

        cout << "Enter Employee ID: ";
        cin >> employee_Id;
        cin.ignore();  
        
        cout << "Enter Designation: ";
        getline(cin, designation); 
    }

    void displayDepartmentInfo() {
        cout << "Department: " << department << endl;
        cout << "Salary: " << salary << endl;
        cout << "Employee ID: " << employee_Id << endl;
        cout << "Designation: " << designation << endl;
    }
};

class employee : public basic_info, public department_info {
public:
    void getEmployeeInfo() {
        getBasicInfo();
        getDepartmentInfo();
    }

    void displayEmployeeInfo() {
        displayBasicInfo();
        displayDepartmentInfo();
    }
};

int main() {
    employee emp;

    cout << "Enter Employee Information" << endl;
    emp.getEmployeeInfo();

    cout << "\nEmployee Information" << endl;
    emp.displayEmployeeInfo();

    return 0;
}