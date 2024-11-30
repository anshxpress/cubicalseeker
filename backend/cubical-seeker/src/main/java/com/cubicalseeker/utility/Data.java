package com.cubicalseeker.utility;

public class Data {
    public static String getMessageBody(String otp, String name) {
        return "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>OTP Verification</title>\n" +
                "    <style>\n" +
                "        body {\n" +
                "            font-family: Arial, sans-serif;\n" +
                "            background-color: #f4f4f4;\n" +
                "            color: #333333;\n" +
                "            margin: 0;\n" +
                "            padding: 0;\n" +
                "        }\n" +
                "        .email-container {\n" +
                "            max-width: 600px;\n" +
                "            margin: 20px auto;\n" +
                "            background-color: #ffffff;\n" +
                "            border-radius: 8px;\n" +
                "            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n" +
                "            overflow: hidden;\n" +
                "        }\n" +
                "        .header {\n" +
                "            background-color: #00aaff;\n" +
                "            color: #ffffff;\n" +
                "            padding: 20px;\n" +
                "            text-align: center;\n" +
                "            font-size: 24px;\n" +
                "            font-weight: bold;\n" +
                "        }\n" +
                "        .content {\n" +
                "            padding: 20px;\n" +
                "            text-align: center;\n" +
                "        }\n" +
                "        .otp-code {\n" +
                "            font-size: 32px;\n" +
                "            font-weight: bold;\n" +
                "            color: #00aaff;\n" +
                "            margin: 20px 0;\n" +
                "        }\n" +
                "        .message {\n" +
                "            font-size: 16px;\n" +
                "            line-height: 1.6;\n" +
                "            color: #555555;\n" +
                "        }\n" +
                "        .footer {\n" +
                "            background-color: #f4f4f4;\n" +
                "            padding: 15px;\n" +
                "            text-align: center;\n" +
                "            font-size: 12px;\n" +
                "            color: #888888;\n" +
                "        }\n" +
                "        a {\n" +
                "            color: #00aaff;\n" +
                "            text-decoration: none;\n" +
                "        }\n" +
                "        a:hover {\n" +
                "            text-decoration: underline;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <div class=\"email-container\">\n" +
                "        <div class=\"header\">Secure Access Code</div>\n" +
                "        <div class=\"content\">\n" +
                "            <p class=\"message\">\n" +
                "                Hello  "+name+" ,<br><br>\n" +
                "                Use the following OTP code to complete your verification. This code is valid for 10 minutes.\n" +
                "            </p>\n" +
                "            <div class=\"otp-code\">" + otp + "</div>\n" +  // Insert OTP code here
                "            <p class=\"message\">\n" +
                "                If you did not request this OTP, please ignore this email or contact support if you have any concerns.\n" +
                "            </p>\n" +
                "        </div>\n" +
                "        <div class=\"footer\">\n" +
                "            © 2023 Cubical Seeker. All rights reserved.<br>\n" +
                "            Need help? Contact us at <a href=\"mailto:support@cubicalseeker.com\">support@cscustomercare.com</a>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</body>\n" +
                "</html>";
    }
}
