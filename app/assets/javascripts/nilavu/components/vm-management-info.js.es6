import NilavuURL from 'nilavu/lib/url';
import {    buildCategoryPanel } from 'nilavu/components/edit-category-panel';
import computed from 'ember-addons/ember-computed-decorators';

export default buildCategoryPanel('info', {

  title: function() {
    return I18n.t("vm_management.info.content_title");
  }.property(),

  hdd_title: function() {
    return I18n.t("vm_management.info.content_hdd_title");
  }.property(),

  cpu_title: function() {
    return I18n.t("vm_management.info.content_cpu_title");
  }.property(),

  ram_title: function() {
    return I18n.t("vm_management.info.content_ram_title");
  }.property(),

  content_id: function() {
    return I18n.t("vm_management.info.content_id");
  }.property(),

  content_name: function() {
    return I18n.t("vm_management.info.content_name");
  }.property(),

  content_domain: function() {
    return I18n.t("vm_management.info.content_domain");
  }.property(),

  content_state: function() {
    return I18n.t("vm_management.info.content_state");
  }.property(),

  content_host: function() {
    return I18n.t("vm_management.info.content_host");
  }.property(),

  content_region: function() {
    return I18n.t("vm_management.info.content_region");
  }.property(),

  content_start_time: function() {
    return I18n.t("vm_management.info.content_start_time");
  }.property(),

  content_hdd_size: function() {
    return I18n.t("vm_management.info.content_hdd_size");
  }.property(),

  content_cpu_cores: function() {
    return I18n.t("vm_management.cpu.content_cpu_cores");
  }.property(),

  content_ram_size: function() {
    return I18n.t("vm_management.ram.content_ram_size");
  }.property(),

  id: function() {
    return this.get('model.id');
  }.property('id'),

  name: function() {
      return this.get('model.name');
  }.property('model.name'),

  domain: function() {
      return this._filterInputs("domain");
  }.property('model.domain'),

  cpu_cores: function() {
      return this._filterInputs("cpu");
  }.property('model.inputs'),

  ram: function() {
      return this._filterInputs("ram");
  }.property('model.inputs'),

  hdd: function() {
      return this._filterInputs("hdd");
  }.property('model.inputs'),

  host: function() {
      return this._filterOutputs("host");
  }.property('model.outputs'),

  region: function() {
      return this._filterOutputs("model.region");
  }.property('model.inputs'),

  hasOutputs: Em.computed.notEmpty('model.outputs'),

  hasInputs: Em.computed.notEmpty('model.inputs'),

  _filterInputs(key) {
      if (!this.get('hasInputs')) return  "";

      return this.get('model.inputs').filterBy('key', key)[0].value;
  },

  _filterOutputs(key) {
    if (!this.get('hasOutputs')) return  "";

    return this.get('model.outputs').filterBy('key', key)[0].value;
  },

  createdAt: function() {
      return new Date(this.get('model.created_at'));
  }.property('model.created_at'),

  status: function() {
    return this.get('model.status');
  }.property('model.status'),

});