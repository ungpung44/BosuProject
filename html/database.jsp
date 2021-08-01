<%@ page language="java" contextType="text/html"; charset="UTF-8" pageEncoding="UTF-8"%>
<%@ page import="Bosu.sql.*"%>
<%
    Connection conn = null;
    try {
        Class.forName("org.mariadb.jdbc.Driver");
        conn = DriverManager.getConnection("jdbc:mariadb://localhost:3306/Bosu", "admin", "20073011");
        out.println("연결성공");
    } catch (Exception e) {
        System.out.println("연결실패: " + e);
    } finally {
        try {
            if(conn!=null)conn.close();
        }catch (Exception e2) {

        }
    }
%>