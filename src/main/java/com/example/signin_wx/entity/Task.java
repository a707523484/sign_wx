package com.example.signin_wx.entity;

public class Task {
    private long taskId;
    private String taskAddress;
    private float taskAddressX;
    private float taskAddressY;
    private String taskStart;
    private String taskEnd;
    private String taskCreator;
    private String taskClass;

    public String getTaskClass() {
        return taskClass;
    }

    public void setTaskClass(String taskClass) {
        this.taskClass = taskClass;
    }

    public long getTaskId() {
        return taskId;
    }

    public void setTaskId(long taskId) {
        this.taskId = taskId;
    }

    public String getTaskAddress() {
        return taskAddress;
    }

    public void setTaskAddress(String taskAddress) {
        this.taskAddress = taskAddress;
    }

    public float getTaskAddressX() {
        return taskAddressX;
    }

    public void setTaskAddressX(float taskAddressX) {
        this.taskAddressX = taskAddressX;
    }

    public float getTaskAddressY() {
        return taskAddressY;
    }

    public void setTaskAddressY(float taskAddressY) {
        this.taskAddressY = taskAddressY;
    }

    public String getTaskStart() {
        return taskStart;
    }

    public void setTaskStart(String taskStart) {
        this.taskStart = taskStart;
    }

    public String getTaskEnd() {
        return taskEnd;
    }

    public void setTaskEnd(String taskEnd) {
        this.taskEnd = taskEnd;
    }

    public String getTaskCreator() {
        return taskCreator;
    }

    public void setTaskCreator(String taskCreator) {
        this.taskCreator = taskCreator;
    }
}
