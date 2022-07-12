var ds = [];
const add = () => {
  let id = document.getElementById("id").value;
  let tg = document.getElementById("tg").value;
  let ts = document.getElementById("ts").value;
  let st = document.getElementById("st").value;
  let tt = document.getElementById("tt").value;
  var ojb = {
    id,
    tg,
    ts,
    st,
    tt,
  };
  let index = ds.findIndex((e) => e.id == ojb.id);
  if (index >= 0) {
    ds.splice(index, 1, ojb);
  } else {
    ds.push(ojb);
  }

  render();
  clear();
  console.log(ds);
};
const render = () => {
  table = `<tr>   
  <th scope="col">id</th>
  <th scope="col">Tác giả</th>
  <th scope="col">Tên sách</th>
  <th scope="col">số trang</th>
  <th scope="col">Chưa Đọc</th>
  <th scope="col">btn</th>
</tr>`;
  for (let i = 0; i < ds.length; i++) {
    table += `<tr>
      <td>${ds[i].id}</td>
      <td>${ds[i].tg}</td>
      <td>${ds[i].ts}</td>
      <td>${ds[i].st}</td>
      <td>${ds[i].tt}</td>
      <th>
        <button type="button" class="btn btn-outline-primary"  onclick="edit(${ds[i].id})">sửa</button>
        <button type="button" class="btn btn-outline-secondary" onclick="xoa(${ds[i].id})">
          xóa
        </button>
      </th>
    </tr>`;
  }
  document.getElementById("render").innerHTML = table;
};
const clear = () => {
  document.getElementById("id").value = "";
  document.getElementById("tg").value = "";
  document.getElementById("ts").value = "";
  document.getElementById("st").value = "";
  document.getElementById("tt").value = "";
};
function xoa(id) {
  for (let i = 0; i < ds.length; i++) {
    if (ds[i].id == id) {
      ds.splice(i, 1);
      render();
    }
  }
}
function edit(id) {
  for (let i = 0; i < ds.length; i++) {
    if (ds[i].id == id) {
      document.getElementById("id").value = ds[i].id;
      document.getElementById("tg").value = ds[i].tg;
      document.getElementById("ts").value = ds[i].ts;
      document.getElementById("st").value = ds[i].st;
      document.getElementById("tt").value = ds[i].tt;
    }
  }
}
