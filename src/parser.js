const fs = require('fs');
const client = require('../config/db');

async function parseAndInsertData(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  const entries = data.split(/(?=NodeB Name)/);

  for (let entry of entries) {
    const nodeb_name = entry.match(/NodeB Name\s*=\s*"([^"]+)"/)?.[1];
    const nodeb_id = parseInt(entry.match(/NodeB ID\s*=\s*(\d+)/)?.[1]);
    const subrack_no = parseInt(entry.match(/Subrack No\.\s*=\s*(\d+)/)?.[1]);
    const subrack_name = entry.match(/Subrack name\s*=\s*(.*)/)?.[1];
    const slot_no = parseInt(entry.match(/Slot No\.\s*=\s*(\d+)/)?.[1]);
    const subsystem_no = parseInt(entry.match(/Subsystem No\.\s*=\s*(\d+)/)?.[1]);
    const iub_trans_bearer_type = entry.match(/IUB Trans Bearer Type\s*=\s*(.*)/)?.[1];
    const ip_trans_apart_ind = entry.match(/IP Trans Apart Ind\s*=\s*(.*)/)?.[1];
    const iub_trans_delay = parseInt(entry.match(/IUB Trans Delay\s*=\s*(\d+)/)?.[1]);
    const satellite_trans_ind = entry.match(/Satellite Trans Ind\s*=\s*(\w+)/)?.[1] === 'True';
    const nodeb_protocol_version = entry.match(/NodeB Protocol Version\s*=\s*(.*)/)?.[1];
    const resource_management_mode = entry.match(/Resource Management Mode\s*=\s*(.*)/)?.[1];
    const nodeb_trace_switch = entry.match(/NodeB Trace Switch\s*=\s*(.*)/)?.[1];
    const nodeb_host_type = entry.match(/NodeB Host Type\s*=\s*(.*)/)?.[1];
    const peer_rnc_id = entry.match(/Peer RNC ID\s*=\s*(.*)/)?.[1];
    const peer_nodeb_id = entry.match(/Peer NodeB ID\s*=\s*(.*)/)?.[1];
    const sharing_type_of_nodeb = entry.match(/Sharing Type Of NodeB\s*=\s*(.*)/)?.[1];
    const cn_operator_index = parseInt(entry.match(/Cn Operator Index\s*=\s*(\d+)/)?.[1]);
    const dss_nodeb_flag = entry.match(/DSS NodeB Flag\s*=\s*(\w+)/)?.[1] === 'TRUE';
    const administrative_state = entry.match(/Administrative state\s*=\s*(.*)/)?.[1];

    if (nodeb_name) {
      const query = `
        INSERT INTO NodeB_Data (
          nodeb_name, nodeb_id, subrack_no, subrack_name, slot_no, subsystem_no,
          iub_trans_bearer_type, ip_trans_apart_ind, iub_trans_delay, satellite_trans_ind,
          nodeb_protocol_version, resource_management_mode, nodeb_trace_switch, nodeb_host_type,
          peer_rnc_id, peer_nodeb_id, sharing_type_of_nodeb, cn_operator_index, dss_nodeb_flag, administrative_state
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [
        nodeb_name, nodeb_id, subrack_no, subrack_name, slot_no, subsystem_no,
        iub_trans_bearer_type, ip_trans_apart_ind, iub_trans_delay, satellite_trans_ind,
        nodeb_protocol_version, resource_management_mode, nodeb_trace_switch, nodeb_host_type,
        peer_rnc_id, peer_nodeb_id, sharing_type_of_nodeb, cn_operator_index, dss_nodeb_flag, administrative_state
      ];

      await client.execute(query, values);
    }
  }
}

module.exports = parseAndInsertData;
