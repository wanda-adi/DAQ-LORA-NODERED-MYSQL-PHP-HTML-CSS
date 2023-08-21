var line
var target
var aktual
var loading_time
var efisiensi
var delay
var status
var cycle_time
var time_trouble
var name_hikitori
var cycle_time
var time_begin
var time_finish
var loading_time
var status_hikitori


if (msg.payload[0] == "0110") {
    name_hikitori = msg.payload[0]
    cycle_time = msg.payload[1]
    time_begin = msg.payload[2]
    time_finish = msg.payload[3]
    loading_time = msg.payload[4]
    status_hikitori = msg.payload[5]

    // query__________________________
    msg.topic = "INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '" + name_hikitori + "', '" + cycle_time + "', '" + time_begin + "', '" + time_finish + "', '" + loading_time + "', '" + status_hikitori + "');"
}

else if (msg.payload[0] == "0111") {
    name_hikitori = msg.payload[0]
    cycle_time = msg.payload[1]
    time_begin = msg.payload[2]
    time_finish = msg.payload[3]
    loading_time = msg.payload[4]
    status_hikitori = msg.payload[5]

    // query__________________________
    msg.topic = "INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '" + name_hikitori + "', '" + cycle_time + "', '" + time_begin + "', '" + time_finish + "', '" + loading_time + "', '" + status_hikitori + "');"
}

else if (msg.payload[0] == "0112") {
    name_hikitori = msg.payload[0]
    cycle_time = msg.payload[1]
    time_begin = msg.payload[2]
    time_finish = msg.payload[3]
    loading_time = msg.payload[4]
    status_hikitori = msg.payload[5]

    // query__________________________
    msg.topic = "INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '" + name_hikitori + "', '" + cycle_time + "', '" + time_begin + "', '" + time_finish + "', '" + loading_time + "', '" + status_hikitori + "');"
}

else if (msg.payload[0] == "0113") {
    name_hikitori = msg.payload[0]
    cycle_time = msg.payload[1]
    time_begin = msg.payload[2]
    time_finish = msg.payload[3]
    loading_time = msg.payload[4]
    status_hikitori = msg.payload[5]

    // query__________________________
    msg.topic = "INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '" + name_hikitori + "', '" + cycle_time + "', '" + time_begin + "', '" + time_finish + "', '" + loading_time + "', '" + status_hikitori + "');"
}

else if (msg.payload[0] == "0114") {
    name_hikitori = msg.payload[0]
    cycle_time = msg.payload[1]
    time_begin = msg.payload[2]
    time_finish = msg.payload[3]
    loading_time = msg.payload[4]
    status_hikitori = msg.payload[5]

    // query__________________________
    msg.topic = "INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '" + name_hikitori + "', '" + cycle_time + "', '" + time_begin + "', '" + time_finish + "', '" + loading_time + "', '" + status_hikitori + "');"
}

else if (msg.payload[0] == "0115"){
    name_hikitori = msg.payload[0]
    cycle_time = msg.payload[1]
    time_begin = msg.payload[2]
    time_finish = msg.payload[3]
    loading_time = msg.payload[4]
    status_hikitori = msg.payload[5]

// query__________________________
    msg.topic = "INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '" + name_hikitori + "', '" + cycle_time + "', '" + time_begin + "', '" + time_finish + "', '" + loading_time + "', '" + status_hikitori + "');"
}
else if (msg.payload[0] == "0116") {
    name_hikitori = msg.payload[0]
    cycle_time = msg.payload[1]
    time_begin = msg.payload[2]
    time_finish = msg.payload[3]
    loading_time = msg.payload[4]
    status_hikitori = msg.payload[5]

// query__________________________
    msg.topic = "INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '" + name_hikitori + "', '" + cycle_time + "', '" + time_begin + "', '" + time_finish + "', '" + loading_time + "', '" + status_hikitori + "');"
}
else if (msg.payload[0] == "0117") {
    name_hikitori = msg.payload[0]
    cycle_time = msg.payload[1]
    time_begin = msg.payload[2]
    time_finish = msg.payload[3]
    loading_time = msg.payload[4]
    status_hikitori = msg.payload[5]

// query__________________________
    msg.topic = "INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '" + name_hikitori + "', '" + cycle_time + "', '" + time_begin + "', '" + time_finish + "', '" + loading_time + "', '" + status_hikitori + "');"
}


else if(msg.payload[0] == "01") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________


    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"



}else if(msg.payload[0] == "02") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "03") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "04") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "05") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "06") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "07") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "08") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "09") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "010") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "011") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "012") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "013") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "014") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "015") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "016") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "017") {

    line = msg.payload[0]
    target = msg.payload[1]
    aktual = msg.payload[2]
    loading_time = msg.payload[3]
    efisiensi = msg.payload[4]
    delay = msg.payload[5]
    status = msg.payload[6]
    cycle_time = msg.payload[7]
    time_trouble = msg.payload[8]
// query__________________________

    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "018A") {
    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}else if(msg.payload[0] == "018B") {
    msg.topic = "INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + line + "', '" + target + "', '" + aktual + "', '" + loading_time + "', '" + efisiensi + "', '" + delay + "','" + status + "', '" + cycle_time + "', '" + time_trouble + "');"
}


else{
    msg.topic = "INSERT INTO table_spam(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '" + msg.payload[0] + "', '" + msg.payload[1] + "', '" + msg.payload[2] + "', '" + msg.payload[3] + "', '" + msg.payload[4] + "', '" + msg.payload[5] + "','" + msg.payload[6] + "', '" + msg.payload[7] + "', '" + msg.payload[8] + "');"
}

return msg;
