package com.example.signin_wx.mapper;


import com.example.signin_wx.entity.*;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {

    @Select("select * from teacher")
    List<Teacher> getAllTeacher();

    @Select("select * from user where user_name = #{uname} and user_password = #{upassword}")
    List<User> getUserByLogin(String uname,String upassword);

    @Select("select * from class where class_teacher = #{uteacher}")
    List<Classwx> getClassByTeacher(String uteacher);

    @Select("select student_class from student where student_name=#{studentName}")
    List<Student> getClassByStudentName(String studentName);

    @Select("select * from class where class_name = #{className}")
    List<Classwx> getClassByClassName(String className);

    @Insert("insert into task (task_id,task_address,task_addressX,task_addressY,task_start,task_end,task_creator,task_class) value (null,#{taskAddress},#{taskAddressX},#{taskAddressY},#{taskStart},#{taskEnd},#{taskCreator},#{taskClass})")
    void addTask(Task task);

    @Select("select * from task where task_creator = #{creator} and task_class=#{taskClass}")
    List<Task> getTaskByCreator(String creator,String taskClass);

    @Insert("insert into record (record_id,record_student,record_date,record_class,record_teacher,record_address) value (null,#{recordStudent},#{recordDate},#{recordClass},#{recordTeacher},#{recordAddress})")
    void addRecord(Record record);

    @Select("select * from record where record_class = #{recordClass} and record_teacher=#{recordTeacher} and record_address=#{recordAddress}")
    List<Record> getRecord(String recordClass,String recordTeacher,String recordAddress);
}
