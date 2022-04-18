package com.example.signin_wx.entity;

public class Record {
    private long recordId;
    private String recordStudent;
    private String recordDate;
    private String recordClass;
    private String recordTeacher;
    private String recordAddress;

    public String getRecordAddress() {
        return recordAddress;
    }

    public void setRecordAddress(String recordAddress) {
        this.recordAddress = recordAddress;
    }

    public String getRecordClass() {
        return recordClass;
    }

    public void setRecordClass(String recordClass) {
        this.recordClass = recordClass;
    }

    public String getRecordTeacher() {
        return recordTeacher;
    }

    public void setRecordTeacher(String recordTeacher) {
        this.recordTeacher = recordTeacher;
    }

    public long getRecordId() {
        return recordId;
    }

    public void setRecordId(long recordId) {
        this.recordId = recordId;
    }

    public String getRecordStudent() {
        return recordStudent;
    }

    public void setRecordStudent(String recordStudent) {
        this.recordStudent = recordStudent;
    }

    public String getRecordDate() {
        return recordDate;
    }

    public void setRecordDate(String recordDate) {
        this.recordDate = recordDate;
    }
}
