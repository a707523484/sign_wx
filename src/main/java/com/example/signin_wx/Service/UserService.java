package com.example.signin_wx.Service;


import com.example.signin_wx.entity.*;
import com.example.signin_wx.mapper.UserMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserService {

    @Resource
    private UserMapper userMapper;

    public List<Teacher> selectAllTeacher(){
        return userMapper.getAllTeacher();
    }

    public List<User> getUserByLogin(String uname,String upassword){
        return userMapper.getUserByLogin(uname,upassword);
    }

    public List<Classwx> getClassByTeacher(String uteacher){
        return userMapper.getClassByTeacher(uteacher);
    }

    public List<Student> getClassByStudentName(String studentName){
        return userMapper.getClassByStudentName(studentName);
    }

    public List<Classwx> getClassByClassName(String className){
        return userMapper.getClassByClassName(className);
    }

    public void addTask(Task task){
        userMapper.addTask(task);
    }

    public List<Task> getTaskByCreator(String creator,String taskClass){
        return userMapper.getTaskByCreator(creator,taskClass);
    }

    public void addRecord(Record record){
        userMapper.addRecord(record);
    }

    public List<Record> getRecord(String recordClass,String recordTeacher,String recordAddress){
        return userMapper.getRecord(recordClass,recordTeacher,recordAddress);
    }
}
